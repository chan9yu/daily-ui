import React, { CSSProperties, FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
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

const Select: FC<SelectProps> = ({
  onChange,
  options = [],
  placeholder = '선택해주세요.',
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayTop, setOverlayTop] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const onOptionSelected =
    ({ value }: SelectOption, index: number) =>
    () => {
      onChange && onChange(value);
      setSelectedIndex(index);
      setIsOpen(false);
    };

  const onToggleIsOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0);
  }, [labelRef.current?.offsetHeight]);

  const overlayStyled: CSSProperties = useMemo(() => ({ top: overlayTop }), [overlayTop]);
  const base = 'rsup-select';

  return (
    <div className={`${base}`}>
      <div
        ref={labelRef}
        className={`${base}__label ${cx({ [`${base}__label--active`]: isOpen })}`}
        onClick={onToggleIsOpen}
      >
        {prefix && <div className={`${base}__prefix`}>{prefix}</div>}
        {selectedIndex === null ? (
          <Text size="sm" type="guide" weight="light">
            {placeholder}
          </Text>
        ) : (
          <Text>{options[selectedIndex].label}</Text>
        )}
        <ArrowDown />
      </div>

      {isOpen && (
        <>
          {
            <ul className={`${base}__overlay`} style={overlayStyled}>
              {options.map((option, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <li
                    key={index}
                    className={`${base}__option ${cx({
                      [`${base}__option--selected`]: isSelected,
                    })}`}
                    onClick={onOptionSelected(option, index)}
                  >
                    <Text>{option.label}</Text>
                    {isSelected && <Check width={16} height={16} />}
                  </li>
                );
              })}
            </ul>
          }
        </>
      )}
    </div>
  );
};

export default Select;
