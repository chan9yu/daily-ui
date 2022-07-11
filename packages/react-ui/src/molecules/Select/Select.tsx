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
  ARROW_Up: 40,
  ESC: 27,
};

const Select: FC<SelectProps> = ({
  onChange,
  options = [],
  placeholder = '선택해주세요.',
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayTop, setOverlayTop] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlighIndex, setHighlightIndex] = useState<number | null>(null);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>([]);
  const labelRef = useRef<HTMLDivElement>(null);

  const onOptionSelected =
    ({ value }: SelectOption, index: number) =>
    () => {
      onChange && onChange(value);
      setSelectedIndex(index);
      setIsOpen(false);
    };

  const onToggleIsOpen = () => setIsOpen((prev) => !prev);
  const highlightOption = (optionIndex: number | null) => setHighlightIndex(optionIndex);
  const onChangeHighlightItem = (itemIndex: number | null) => () => highlightOption(itemIndex);

  const getMoveOptionIndex = useCallback(
    (currentIndex: number | null, options: Array<SelectOption>, type: 'prev' | 'next') => {
      //! 수정필요
      const test = currentIndex === null || currentIndex === options.length - 1;

      if (type === 'prev') return test ? 0 : currentIndex - 1;
      else if (type === 'next') return test ? 0 : currentIndex + 1;
      else return null;
    },
    [],
  );

  const onLabelKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const keyIncludedToOpen = (keys: string[] | number[], key: string | number) => {
      typeof key === 'string'
        ? (keys as string[]).includes(key) && onToggleIsOpen()
        : (keys as number[]).includes(key) && setIsOpen(true);
    };

    //* e.keyCode deprecated 대체코드
    //* key propetry를 지원하지 않은 브라우저인 경우 e.keyCode 사용
    const currentKey = e.key || e.keyCode;
    typeof currentKey === 'string'
      ? keyIncludedToOpen([KEYS.ENTER, KEYS.SPACE], currentKey)
      : keyIncludedToOpen([KEY_CODES.ENTER, KEY_CODES.SPACE], currentKey);
  };

  const onOptionKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();

    const currentKey = e.key || e.keyCode;
    //! 수정필요
    if (typeof currentKey === 'string') {
      if (currentKey === KEYS.ESC) {
        setIsOpen(false);
        return;
      }
      if (currentKey === KEYS.ARROW_DOWN) {
        highlightOption(getMoveOptionIndex(highlighIndex, options, 'next'));
      }
    } else {
      if (currentKey === KEY_CODES.ESC) {
        setIsOpen(false);
        return;
      }
      if (currentKey === KEY_CODES.ARROW_DOWN) {
        highlightOption(getMoveOptionIndex(highlighIndex, options, 'next'));
      }
    }
  };

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0);
  }, [labelRef.current?.offsetHeight]);

  useEffect(() => {
    //* li 엘리먼트 ref 동적 할당
    setOptionRefs(options.map(() => createRef<HTMLLIElement>()));
  }, [options.length]);

  useEffect(() => {
    if (highlighIndex && isOpen) {
      const ref = optionRefs[highlighIndex];
      ref && ref.current && ref.current.focus();
    }
  }, [isOpen]);

  const overlayStyled: CSSProperties = useMemo(() => ({ top: overlayTop }), [overlayTop]);
  const BASE = 'rsup-select' as const;

  return (
    <div className={`${BASE}`}>
      <div
        ref={labelRef}
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
                tabIndex={isHighlighted ? -1 : 0}
                className={`${BASE}__option ${cx({
                  [`${BASE}__option--selected`]: isSelected,
                  [`${BASE}__option--highlighted`]: isHighlighted,
                })}`}
                onClick={onOptionSelected(option, index)}
                onKeyDown={onOptionKeyDown}
                onMouseEnter={onChangeHighlightItem(index)}
                onMouseLeave={onChangeHighlightItem(null)}
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
