//Este es el componente encargado de renderizar los procesos individuales, maneja su tiempo de vida y su nombre
import React, { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import StopIcon from "@mui/icons-material/Stop";

const Process = (props) => {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(props.started);
  const [pause, setPause] = useState(false);
  const [finished, setFinished] = useState(false);
  const [firstRun, setFirstRun] = useState(true);

  //Temporizador
  React.useEffect(() => {
    if (firstRun === true) {
      setStart(props.started);
      setPause(false);
    }
    if (start) {
      setFirstRun(false);
      console.log(start);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            setFinished(true);
            return 100;
          }
          if (finished === true) {
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }
  }, [start, props.started, firstRun, finished]);

  const pauseHandler = () => {
    setPause(() => {
      return !pause;
    });
    console.log("Pause: ", pause);
    if (pause === true) {
      setStart(false);
    } else {
      setStart(true);
    }
  };

  const finishedHandler = () => {
    setFinished(!finished);
    setStart(true);
  };
  const pauseH = () =>{
    pauseHandler();
    setPause(() => {
      return !pause;
    });

  }
  const stateHandler = () =>{
    if (finished === true){
      return  "Finalizado";
    }
    else if(start === true && pause === false){
      return "Ejecutando";
    }
    else if (start === false && pause === false){
      return "Preparado";
    }
    else if (pause === false){
      return "Pausado";
    }
    else{
      return "Ejecutando";
    }
  }

  //Parte visual del renderizado
  return (
    <>
      {console.log(props.duration)}
      <Box className="process__container">
        <Box sx={{ width: "70%", m: 2, mt: 5 }} className="process__bar">
          <h1 className="process__title">Proceso {props.name} - {stateHandler()}</h1>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Box className="process__buttons">
          <div onClick={pauseH}>
            {pause === true ? (
              <PauseIcon
                className="process__button"
                fontSize="large"
              ></PauseIcon>
            ) : (
              <PlayArrowIcon
                className="process__button"
                fontSize="large"
              ></PlayArrowIcon>
            )}
          </div>

          <div onClick={finishedHandler}>
            {finished === true ? (
              <ReplayIcon
                className="process__button"
                fontSize="large"
              ></ReplayIcon>
            ) : (
              <StopIcon className="process__button" fontSize="large"></StopIcon>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Process;
