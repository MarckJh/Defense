document.querySelectorAll('a[href$="index.html"], a[href$="plan.html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '../home.html';
  });
});

const jungle = [
  {
    day: 1, title: 'Chest + Abs', muscle: 'Chest', ex: [
      { name: 'Crunches' }, { name: 'Mountain Climbers' }, { name: 'Bear Crawls' }, { name: 'Push-ups' }, { name: 'Plank' }
    ]
  },
  {
    day: 2, title: 'Back + Biceps', muscle: 'Back & Biceps', ex: [
      { name: 'Pull-ups' }, { name: 'Superman' }, { name: 'Plank' }, { name: 'Push ups' }, { name: 'Floor Y-Raises' }
    ]
  },
  {
    day: 3, title: 'Legs', muscle: 'Legs', ex: [
      { name: 'Jump Squats' }, { name: 'Wall Sit' }, { name: 'Lunges' }, { name: 'Bodyweight Squats' }, { name: 'Calf Raises' }
    ]
  },
  {
    day: 4, title: 'Shoulders + Abs', muscle: 'Shoulders', ex: [
      { name: 'Mountain Climbers' }, { name: 'Burpee' }, { name: 'High knees' }, { name: 'Tricep Dips' }, { name: 'Push ups' }
    ]
  },
  {
    day: 5, title: 'Arms + Mobility', muscle: 'Arms', ex: [
      { name: 'Bicep Curls' }, { name: 'Triceps Dips' }, { name: 'Overhead Tricep Extension' }, { name: 'Hammer Curls' }, { name: 'Arm Circles' }
    ]
  },
  {
    day: 6, title: 'Active Recovery / Cardio', muscle: 'Recovery', ex: [
      { name: 'Light Jog' }, { name: 'Yoga' }, { name: 'Core Circuit' }
    ]
  },
  {
    day: 7, title: 'Full Body / Optional', muscle: 'Full Body', ex: [
      { name: 'Deadlift' }, { name: 'Push Press' }, { name: 'Goblet Squat' }, { name: 'Row Variation' }, { name: 'Farmer Carry' }
    ]
  }
];

function render() {
  const tigerCave = document.getElementById('tigerCave');
  tigerCave.innerHTML = '';
  jungle.forEach(day => {
    const deer = document.createElement('article');
    deer.className = 'deer';
    deer.innerHTML = `
      <div><strong>Day ${day.day} — ${day.title}</strong><div>${day.muscle}</div></div>
      <ul>
        ${day.ex.map(e => `<li><label><input class='rabbit' type='checkbox'> <strong>${e.name}</strong></label></li>`).join('')}
      </ul>
    `;
    tigerCave.appendChild(deer);
  });

  document.querySelectorAll('.rabbit').forEach(chk => {
    chk.addEventListener('change', ev => {
      const li = ev.target.closest('li');
      li.style.opacity = ev.target.checked ? 0.5 : 1;
      li.style.textDecoration = ev.target.checked ? 'line-through' : 'none';
    });
  });
}

render();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "test") {
        setTimeout(() => {
            sendResponse({ result: "done" });
        }, 1000);
        return true;
    }
});