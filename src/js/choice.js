(function() {
  'use strict';

  const simulation = document.getElementById('simulation');
  const choices = document.getElementById('choices');

  const prepareDisplay = ({choicesDisplay, simulationDisplay}) => {
    choices.style.display = choicesDisplay;
    simulation.style.display = simulationDisplay;
  };

  const startSimulation = () => {
    const {checked: horizontalDirection} = document.getElementById('horizontal');
    const {checked: enableCollisions} = document.getElementById('enable');

    prepareDisplay({choicesDisplay: 'none', simulationDisplay: 'block'});

    window
      .BouncingBalls
      .init('canvas', 'dimensions', horizontalDirection, enableCollisions);
  }

  const back = () => {
    prepareDisplay({choicesDisplay: 'block', simulationDisplay: 'none'});

    window
      .BouncingBalls
      .clear();
  }

  document
    .getElementById('back')
    .addEventListener('click', back);
  document
    .getElementById('start')
    .addEventListener('click', startSimulation);

}());
