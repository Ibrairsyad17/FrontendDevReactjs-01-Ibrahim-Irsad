import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PriceRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Slider
        range
        min={0}
        max={1000}
        defaultValue={[0, 100]}
        value={value}
        onChange={(value) => {
          if (Array.isArray(value)) {
            onChange([value[0], value[1]]);
          }
        }}
      />
      <div className="flex gap-2">
        <input
          type="number"
          value={value[0]}
          onChange={(e) => onChange([Number(e.target.value), value[1]])}
          className="w-16 border rounded px-2"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={value[1]}
          onChange={(e) => onChange([value[0], Number(e.target.value)])}
          className="w-16 border rounded px-2"
          placeholder="Max Price"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
