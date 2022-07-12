import React, {
  createRef,
  CSSProperties,
  FC,
  KeyboardEvent,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cx from 'classnames';
import { ArrowDown, Check } from '@rsup/react-icon';
import Text from '../../atoms/Text';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onChange?: (value: string) => void;
  options?: SelectOption[];
  placeholder?: string;
  prefix?: ReactNode;
}

const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ESC: 'Escape',
};

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  ARROW_DOWN: 40,
  ARROW_UP: 40,
  ESC: 27,
};

const BASE = 'rsup-select' as const;

const Select: FC<SelectProps> = ({
  onChange,
  options = [],
  placeholder = '선택해주세요.',
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayTop, setOverlayTop] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlighIndex, setHighlightIndex] = useState<number | null>(0);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>([]);
  const labelRef = useRef<HTMLDivElement>(null);

  const onOptionSelected = useCallback(
    ({ value }: SelectOption, index: number) =>
      () => {
        if (onChange) onChange(value);
        setSelectedIndex(index);
        setIsOpen(false);
      },
    [onChange],
  );

  const onToggleIsOpen = () => setIsOpen((prev) => !prev);
  const highlightOption = (optionIndex: number | null) => setHighlightIndex(optionIndex);
  const onChangeHighlightOption = (itemIndex: number | null) => () => highlightOption(itemIndex);

  const getMoveOptionIndex = useCallback(
    (currentIndex: number | null, selectOptions: SelectOption[], type: 'prev' | 'next') => {
      switch (type) {
        case 'prev':
          if (currentIndex === null) return 0;
          if (currentIndex === 0) return selectOptions.length - 1;
          return currentIndex - 1;
        case 'next':
          if (currentIndex === null || currentIndex === selectOptions.length - 1) return 0;
          return currentIndex + 1;
        default:
          return null;
      }
    },
    [],
  );

  const keyMatchingEvent = useCallback(
    (
      currentKey: string | number,
      isMatchKey: string | number,
      type: 'exit' | 'movePrev' | 'moveNext' | 'selected',
    ) => {
      switch (type) {
        case 'exit':
          if (currentKey === isMatchKey) {
            setIsOpen(false);
            return;
          }
          break;
        case 'movePrev':
          if (currentKey === isMatchKey)
            highlightOption(getMoveOptionIndex(highlighIndex, options, 'prev'));
          break;
        case 'moveNext':
          if (currentKey === isMatchKey)
            highlightOption(getMoveOptionIndex(highlighIndex, options, 'next'));
          break;
        case 'selected':
          if (currentKey === isMatchKey) {
            if (highlighIndex) {
              console.log('selected');
              onOptionSelected(options[highlighIndex], highlighIndex);
            }
          }
          break;
        default:
          break;
      }
    },
    [getMoveOptionIndex, highlighIndex, onOptionSelected, options],
  );

  const onLabelKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const keyIncludedToOpen = (keys: string[] | number[], key: string | number) => {
      if (typeof key === 'string') {
        if ((keys as string[]).includes(key)) onToggleIsOpen();
      } else {
        if ((keys as number[]).includes(key)) onToggleIsOpen();
      }
    };

    //* e.keyCode deprecated 대체코드
    //* key propetry를 지원하지 않은 브라우저인 경우 e.keyCode 사용
    const currentKey = e.key || e.keyCode;
    if (typeof currentKey === 'string') {
      keyIncludedToOpen([KEYS.ARROW_DOWN, KEYS.ENTER, KEYS.SPACE], currentKey);
    } else {
      keyIncludedToOpen([KEY_CODES.ARROW_DOWN, KEY_CODES.ENTER, KEY_CODES.SPACE], currentKey);
    }
  };

  const onOptionKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();

    const currentKey = e.key || e.keyCode;
    if (typeof currentKey === 'string') {
      keyMatchingEvent(currentKey, KEYS.ESC, 'exit');
      keyMatchingEvent(currentKey, KEYS.ARROW_UP, 'movePrev');
      keyMatchingEvent(currentKey, KEYS.ARROW_DOWN, 'moveNext');
      keyMatchingEvent(currentKey, KEYS.ENTER, 'selected');
    } else if (typeof currentKey === 'number') {
      keyMatchingEvent(currentKey, KEY_CODES.ESC, 'exit');
      keyMatchingEvent(currentKey, KEY_CODES.ARROW_UP, 'movePrev');
      keyMatchingEvent(currentKey, KEY_CODES.ARROW_DOWN, 'moveNext');
      keyMatchingEvent(currentKey, KEY_CODES.ENTER, 'selected');
    }
  };

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0);
  }, [labelRef.current?.offsetHeight]);

  useEffect(() => {
    //* li 엘리먼트 ref 동적 할당
    setOptionRefs(options.map(() => createRef<HTMLLIElement>()));
  }, [options, options.length]);

  useEffect(() => {
    if (highlighIndex && isOpen) {
      const ref = optionRefs[highlighIndex];
      if (ref && ref.current) ref.current.focus();
    }
  }, [highlighIndex, isOpen, optionRefs]);

  const overlayStyled: CSSProperties = useMemo(() => ({ top: overlayTop }), [overlayTop]);

  return (
    <div className={`${BASE}`}>
      <div
        ref={labelRef}
        role="button"
        tabIndex={0}
        className={`${BASE}__label ${cx({ [`${BASE}__label--active`]: isOpen })}`}
        onClick={onToggleIsOpen}
        onKeyDown={onLabelKeyDown}
        aria-controls={`${BASE}-list`}
        aria-haspopup={true}
        aria-expanded={isOpen}
      >
        <div className={`${BASE}__label-wrapper`}>
          {prefix && <div className={`${BASE}__prefix`}>{prefix}</div>}
          {selectedIndex === null ? (
            <Text size="sm" type="guide" weight="light">
              {placeholder}
            </Text>
          ) : (
            <Text>{options[selectedIndex].label}</Text>
          )}
        </div>
        <ArrowDown />
      </div>

      {isOpen && (
        <ul role="menu" id={`${BASE}-list`} className={`${BASE}__overlay`} style={overlayStyled}>
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isHighlighted = highlighIndex === index;
            const ref = optionRefs[index];

            return (
              <li
                key={option.value}
                ref={ref}
                role="option"
                aria-selected={isSelected}
                tabIndex={isHighlighted ? -1 : 0}
                className={`${BASE}__option ${cx({
                  [`${BASE}__option--selected`]: isSelected,
                  [`${BASE}__option--highlighted`]: isHighlighted,
                })}`}
                onClick={onOptionSelected(option, index)}
                onKeyDown={onOptionKeyDown}
                onMouseEnter={onChangeHighlightOption(index)}
                onMouseLeave={onChangeHighlightOption(null)}
              >
                <Text>{option.label}</Text>
                {isSelected && <Check width={16} height={16} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
