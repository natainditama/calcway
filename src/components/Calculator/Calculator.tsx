import React, { createRef, useEffect, useState, memo } from "react";
import Screen from "../Screen/Screen";
import Keypad from "../Keypad/Keypad";

function Calculator() {
  const [calc, setCalc] = useState<string>("");
  const [calculated, setCalculated] = useState<Boolean>(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ref = createRef<HTMLParagraphElement>();

  const updateCalc = (value: string) => {
    const displayValue = ref.current as HTMLParagraphElement;
    if (value === "0" && calc === "0") return clear();
    else if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    )
      return;
    else if (!operations.includes(value)) {
      setCalc((+calc + +value).toString());

      if (calc.length > 7) {
        displayValue.style.fontSize = "2.5rem";
      }
      if (calc.length === 11 && !operations.includes(value)) {
        displayValue.style.width = "fit-content";
        displayValue.style.overflow = "hidden";
        return setCalc(calc.toString());
      } else if (calc.length === 11 && operations.includes(value)) {
        console.log("hi");
      } else {
        console.error();
      }
    }

    if (calculated === true && operations.includes(value)) {
      setCalculated(false);
    } else if (calculated === true && !operations.includes(value)) {
      setCalculated(false);
      return setCalc(value);
    } else if (calculated === true && value === "0") {
      setCalculated(false);
      return setCalc("");
    } else {
      console.error();
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    if (eval(calc) === undefined) return;
    setCalculated(true);
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    setCalculated(false);
    setCalc("");
  };

  const deleteCalc = () => {
    if (calc === "") return;
    const displayValue = ref.current as HTMLParagraphElement;
    if (calc.length < 7) {
      displayValue.style.fontSize = "3.3rem";
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const onKeyDown = (event: KeyboardEvent): void => {
    if (operations.includes(event.key) || numbers.includes(event.key)) {
      updateCalc(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
      calculate();
    } else if (event.key === "Backspace") deleteCalc();
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <main>
      <article className="calculator">
        <Screen ref={ref} calc={calc} />
        <Keypad
          updateCalc={updateCalc}
          calculate={calculate}
          deleteCalc={deleteCalc}
          clear={clear}
          onKeyDown={onKeyDown}
        />
      </article>
    </main>
  );
}

export default memo(Calculator);
