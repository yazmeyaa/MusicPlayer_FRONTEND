import React, { useEffect, useRef } from 'react';
import { useActions } from 'hooks/useActions';
import { PregressBarBody, CurrentProgressBar, ProgressBarThumb } from './styled';

function getPercent(num1: number, num2: number): number {
  return (num1 / num2) * 100;
}

function setPosition(xMousePos: number, element: DOMRect): number {
  const value = getPercent(xMousePos - element.left, element.right - element.left);
  if (value > 100) {
    return 100;
  } else if (value < 0) {
    return 0;
  }
  return getPercent(xMousePos - element.left, element.right - element.left);
}

interface IProgressBar {
  currentSongProgress: number;
  songDuration: number;
}

export const ProgressBar = ({ currentSongProgress, songDuration }: IProgressBar) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const isElementDraggable = useRef<boolean>(false);
  const lastTime = useRef<number>(Date.now());
  const canRender = useRef<boolean>(true);
  const { ChangeCurrentSongTime } = useActions();

  function handleOnMouseMove(event: MouseEvent) {
    if (Date.now() - lastTime.current > 16.6666) {
      canRender.current = true;
    }

    if (isElementDraggable.current && null !== progressRef.current && canRender.current) {
      ChangeCurrentSongTime(setPosition(event.pageX, progressRef.current.getBoundingClientRect()));
      lastTime.current = Date.now();
    }
  }

  function handleMouseUp() {
    if (isElementDraggable.current) {
      isElementDraggable.current = !isElementDraggable.current;
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleOnMouseMove, false);

    window.addEventListener('mouseup', handleMouseUp, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleMouseDownOnBar(event: React.MouseEvent) {
    isElementDraggable.current = true;

    if (null !== progressRef.current) {
      ChangeCurrentSongTime(setPosition(event.pageX, progressRef.current.getBoundingClientRect()));
    }
  }

  return (
    <PregressBarBody onMouseDown={handleMouseDownOnBar} ref={progressRef}>
      <CurrentProgressBar style={{ width: currentSongProgress.toPrecision(3) + '%' }} />
      <ProgressBarThumb />
    </PregressBarBody>
  );
};
