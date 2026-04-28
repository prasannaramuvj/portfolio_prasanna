import React, { useEffect, useState, useRef } from "react";

const TextType = ({
  texts = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 3500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 1.1,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  className = "",
  style = {},
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const timeoutRef = useRef(null);
  const cursorRef = useRef(null);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;
    cursorRef.current = setInterval(() => {
      setCursorVisible((v) => !v);
    }, (cursorBlinkDuration * 1000) / 2);
    return () => clearInterval(cursorRef.current);
  }, [showCursor, cursorBlinkDuration]);

  // Typing effect
  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[textIndex % texts.length];

    const getSpeed = () => {
      if (variableSpeedEnabled) {
        return (
          Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) +
          variableSpeedMin
        );
      }
      return isDeleting ? deletingSpeed : typingSpeed;
    };

    if (!isDeleting && displayedText === currentText) {
      // Pause before deleting
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting && displayedText === "") {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentText.slice(0, prev.length - 1)
          : currentText.slice(0, prev.length + 1)
      );
    }, getSpeed());

    return () => clearTimeout(timeoutRef.current);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMin,
    variableSpeedMax,
  ]);

  return (
    <span
      className={className}
      style={{ display: "inline-block", whiteSpace: "pre", ...style }}
    >
      {displayedText}
      {showCursor && (
        <span
          style={{
            opacity: cursorVisible ? 1 : 0,
            transition: `opacity ${cursorBlinkDuration / 2}s`,
            marginLeft: "1px",
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;