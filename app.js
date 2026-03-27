const STORAGE_KEYS = {
  lang: 'noel-dossier-lang',
  unlocked: 'noel-dossier-unlocked'
};

const copy = {
  ko: {
    brandLabel: 'ARCHIVE',
    statusActive: 'ACTIVE FILE',
    heroEyebrow: 'UNOFFICIAL DOSSIER / FIELD VIEW',
    heroTitle: '정식 기록에는 남지 않는, 그러나 현장에는 분명히 존재하는 인물.',
    heroLead: '차갑게 정리된 문장, 느린 시선, 오래 남는 정적. 이 페이지는 노엘 헤일을 소개하는 동시에, 단순한 프로필보다 조금 더 깊은 체류감을 만들기 위한 비공식 파일이다.',
    badgeNationalityValue: '영국',
    badgeNationalityLabel: '국적',
    badgeAgeLabel: '나이',
    badgeHeightLabel: '키',
    badgeResidenceLabel: '거주',
    badgeAffiliationLabel: '소속',
    openDossier: '파일 열기',
    openLockedArchive: '성장배경 잠금 보기',
    fieldStamp: 'FIELD DOSSIER',
    aliasLabel: 'CALLSIGN',
    roleLine: 'Senior HUMINT Case Officer · NOC Operations',
    idDobLabel: 'DOB',
    idAgeLabel: 'AGE',
    idHeightLabel: 'HEIGHT',
    idEyesLabel: 'EYES',
    idEyesValue: '녹갈색 헤이즐',
    idBaseLabel: 'BASE',
    idBaseValue: '런던 SW7 뮤스하우스',
    idStatusLabel: 'STATUS',
    idStatusValue: '활동 중',
    heroFootnote: '공식적으로는 빈 공간처럼 보이지만, 필요할 때마다 가장 먼저 움직이는 파일.',
    identityTitle: '실제 요원 프로필',
    identityCopy: '표면의 정보만으로도 인물의 결이 읽히도록 설계했다. 군더더기 없이 정리하되, 살아 있는 사람처럼 보이는 디테일은 남겨두었다.',
    identityNameLabel: '이름',
    identityNationalityLabel: '국적',
    identityNationalityValue: '영국',
    identityAgeLabel: '나이',
    identityHeightLabel: '키',
    identityRoleLabel: '직무',
    identityRoleValue: 'MI6 Senior HUMINT Case Officer · NOC',
    identityLegendLabel: '전문',
    identityLegendValue: '행동·심리 프로파일링 / 외부 자문',
    identityResidenceLabel: '거주',
    identityResidenceValue: '런던 SW7 뮤스하우스 2층',
    identityBirthLabel: '출생',
    identityBirthValue: '1992년 12월 22일',
    presenceTitle: '보이는 것보다 늦게 남는 인상',
    presenceItem1: '정중하고 여유롭지만 표정은 쉽게 읽히지 않는다.',
    presenceItem2: '상대를 편안하게 만들 수 있지만, 그 이상은 임의로 주지 않는다.',
    presenceItem3: '유머는 거의 장식이 아니라 긴장 조절용 도구에 가깝다.',
    presenceItem4: '관심이 생기면 말보다 관찰 시간이 먼저 길어진다.',
    physicalTitle: '피지컬 시그니처',
    physicalItem1: '흰 피부, 검은 머리, 녹갈색 헤이즐 눈.',
    physicalItem2: '넓은 어깨와 곧은 뼈대, 로잉으로 단단해진 등과 코어.',
    physicalItem3: '손등의 푸른 핏줄, 손바닥 안쪽의 굳은살, 차가운 손.',
    physicalItem4: '뚜렷한 눈썹과 코로 이어지는 라인, 혈색이 짙은 입술.',
    rhythmTitle: '일상의 리듬과 습관',
    rhythmSub1: '유지 방식',
    rhythmCopy1: '로잉은 취미이자 정리 방식이다. 카페인은 선호하지만 단 음료나 탄산은 두지 않는다. 술과 담배는 효율과 이성을 흐린다고 판단한다.',
    rhythmSub2: '몸이 먼저 드러내는 것',
    rhythmCopy2: '관찰 중에는 시선이 손으로 먼저 간다. 불편하면 커프스를 정리하고, 분노할수록 오히려 움직임은 느려진다. 안정이 필요할 때는 체온을 찾는 쪽으로 미세하게 기운다.',
    logicTitle: '행동 논리',
    logicItem1: '리스크가 보이면 자신이 안는 쪽으로 동선을 옮긴다.',
    logicItem2: '설명보다 먼저 공간을 정리하고 자리와 흐름을 바꾼다.',
    logicItem3: '비겁함과 책임 회피를 경멸한다.',
    logicItem4: '정중함은 후퇴가 아니라 통제 방식에 가깝다.',
    textureTitle: '인물을 사람답게 만드는 잔디테일',
    textureItem1: '태어날 때부터 살던 런던 SW7의 뮤스하우스 2층에 여전히 거주한다.',
    textureItem2: '누군가의 안부나 귀가를 기다리는 습관에 약하게 멈춘다.',
    textureItem3: '자기 감정보다 타인의 감정을 먼저 읽는 버릇이 오래 남아 있다.',
    textureItem4: '관심이 생기면 챙김과 통제가 같은 손에서 동시에 나온다.',
    gateEyebrow: 'BACKGROUND / LOCKED',
    gateTitleLocked: '성장배경은 첫 접근에서 바로 열리지 않는다.',
    gateLeadLocked: '이 파일의 과거는 표면 아래에 남아 있다. 씰을 길게 눌러 파일을 활성화한 뒤, 기억의 연대를 올바른 순서로 맞추면 배경이 해제된다.',
    gateTitleUnlocked: '성장배경 접근 허용',
    gateLeadUnlocked: '숨겨져 있던 연대가 해제되었다. 이제 노엘의 과거가 파일 본문으로 드러난다.',
    sealCore: '길게 누르기',
    gateStatusIdle: '길게 눌러 파일을 활성화하세요.',
    gateStatusNeedArm: '먼저 씰을 길게 눌러 파일을 활성화해야 합니다.',
    gateStatusArmed: '활성화 완료. 이제 1992 → 2010 → 2016 순서로 맞추세요.',
    gateStatusReject: '순서가 거부되었습니다. 연대를 다시 맞추세요.',
    gateStatusUnlocked: '배경 접근 허용. 파일이 해제되었습니다.',
    gateStatusProgress: (value) => `기록 ${value}/3 확인됨.`,
    gateHint: '힌트: 기억은 시간순으로 열린다.',
    seq1992: 'ORIGIN',
    seq2010: 'FRACTURE',
    seq2016: 'RECRUIT',
    unlockPending: 'LOCKED',
    unlockGranted: 'GRANTED',
    timelineTitle1: '완벽한 집, 부족한 온기',
    timelineCopy1: '오케스트라 지휘자인 아버지와 런던 옥션 하우스 큐레이터인 어머니 아래에서 자랐다. 음악과 미술품은 넘쳤지만, 정서적 온기는 없었다. 그는 사랑받기 위해 먼저 표정과 톤을 읽는 아이가 되었다.',
    timelineTitle2: '비가 오던 밤의 첫 균열',
    timelineCopy2: '대입을 앞두고 부모의 귀가가 늦어지던 밤, 전화 한 통으로 빗길 연쇄사고와 사망 소식을 듣는다. 그는 울지 못했고, 그 사실을 두고 스스로를 감정을 느끼지 못하는 인간이라고 결론내렸다.',
    timelineTitle3: '케임브리지와 인간 해석의 언어',
    timelineCopy3: '케임브리지 PBS에 진학해 심리와 행동을 학문이 아니라 삶의 설명서처럼 다뤘다. 학부 수석 졸업 후, 비언어적 커뮤니케이션과 행동 기제를 분석하는 박사과정으로 이동했다.',
    timelineTitle4: '결점이 재능으로 번역되던 순간',
    timelineCopy4: 'MI6 리크루터는 오래전부터 그를 관찰해 왔다. 졸업 이틀 전 전달된 스카우트는, 감정에 휘둘리지 않는 해석 능력을 결함이 아닌 현장 적성으로 다시 명명했다.',
    timelineTitle5: '현재의 노엘',
    timelineCopy5: '현재 그는 MI6의 Senior HUMINT Case Officer이자 NOC 전문 요원이다. 자신의 무감정을 공백이 아니라 우월한 정밀도로 이해하며, 그 믿음 위에 오늘의 자신을 세워두고 있다.',
    dateStrip1: '1992.12.22 / 출생',
    dateStrip2: '2010.01 / 부모 사망',
    dateStrip3: '2010.10 / Cambridge PBS',
    dateStrip4: '2013.06 / 학부 수석',
    dateStrip5: '2016.07 / 졸업 전 MI6 스카우트',
    dateStrip6: '2026.03 / 10년차 Senior HUMINT',
    notesEyebrow: 'FIELD NOTES',
    notesTitle: '관찰, 통제, 결핍이 한 사람 안에서 정렬되는 방식',
    notesLead: '소개 페이지이지만, 단순한 스펙 카드로 끝나지 않도록 행동과 심리의 결을 따로 남겼다.',
    notesCardTitle1: '무엇을 먼저 보는가',
    notesCardCopy1: '사람의 손, 그다음 시선, 그다음 목소리의 톤과 속도. 공간에서는 출구와 조명을 먼저 읽는다.',
    notesCardTitle2: '압박이 걸릴 때',
    notesCardCopy2: '문장은 짧아지기보다 더 정확해진다. 질문은 확인형이 되고, 움직임은 조용히 느려진다.',
    notesCardTitle3: '위로의 방식',
    notesCardCopy3: '말보다 먼저 앉히고, 치우고, 바꾸고, 그 뒤에 짧게 말한다. 위로조차 공간 배치로 시작하는 타입이다.',
    notesCardTitle4: '가까워질수록',
    notesCardCopy4: '설명은 줄고 행동이 늘어난다. 챙김과 통제가 같은 문장 안에 동시에 나타난다.',
    footerLine: 'Static build / GitHub Pages ready / No external build step required.',
    switchTo: '영어로 전환'
  },
  en: {
    brandLabel: 'ARCHIVE',
    statusActive: 'ACTIVE FILE',
    heroEyebrow: 'UNOFFICIAL DOSSIER / FIELD VIEW',
    heroTitle: 'A man who does not appear in the record, yet is unmistakably present in the field.',
    heroLead: 'Cold precision, a slow gaze, and silence that lingers. This page introduces Noel Hale as an unofficial file designed to feel deeper than a flat profile card.',
    badgeNationalityValue: 'British',
    badgeNationalityLabel: 'Nationality',
    badgeAgeLabel: 'Age',
    badgeHeightLabel: 'Height',
    badgeResidenceLabel: 'Base',
    badgeAffiliationLabel: 'Affiliation',
    openDossier: 'Open dossier',
    openLockedArchive: 'View locked background',
    fieldStamp: 'FIELD DOSSIER',
    aliasLabel: 'CALLSIGN',
    roleLine: 'Senior HUMINT Case Officer · NOC Operations',
    idDobLabel: 'DOB',
    idAgeLabel: 'Age',
    idHeightLabel: 'Height',
    idEyesLabel: 'Eyes',
    idEyesValue: 'Green-brown hazel',
    idBaseLabel: 'Base',
    idBaseValue: 'London SW7 mews house',
    idStatusLabel: 'Status',
    idStatusValue: 'Active',
    heroFootnote: 'Officially it reads like empty space. Operationally it moves first when it matters.',
    identityTitle: 'Actual field profile',
    identityCopy: 'The layout is meant to read like a live agent file: stripped down at the surface, but detailed enough to feel inhabited.',
    identityNameLabel: 'Name',
    identityNationalityLabel: 'Nationality',
    identityNationalityValue: 'British',
    identityAgeLabel: 'Age',
    identityHeightLabel: 'Height',
    identityRoleLabel: 'Role',
    identityRoleValue: 'MI6 Senior HUMINT Case Officer · NOC',
    identityLegendLabel: 'Specialism',
    identityLegendValue: 'Behavioural & psychological profiling / external consultant',
    identityResidenceLabel: 'Residence',
    identityResidenceValue: 'Second floor, London SW7 mews house',
    identityBirthLabel: 'Birth',
    identityBirthValue: '22 December 1992',
    presenceTitle: 'An impression that settles after the first look',
    presenceItem1: 'Polite and unhurried, with an expression that rarely yields much.',
    presenceItem2: 'Capable of putting others at ease, but never more than he decides to give.',
    presenceItem3: 'Humour is not decoration. It is a tool for regulating tension.',
    presenceItem4: 'When interest appears, observation lengthens before speech does.',
    physicalTitle: 'Physical signature',
    physicalItem1: 'Pale skin, black hair, green-brown hazel eyes.',
    physicalItem2: 'Broad shoulders, straight frame, and a back built by years of rowing.',
    physicalItem3: 'Blue veins across the backs of the hands, callused palms, cold touch.',
    physicalItem4: 'Strong brows, a clean bridge into the nose, and naturally dark lips.',
    rhythmTitle: 'Daily rhythm and habits',
    rhythmSub1: 'How he maintains himself',
    rhythmCopy1: 'Rowing is both hobby and regulation. He prefers caffeine, keeps sweetness out of reach, and treats alcohol or tobacco as tools too inefficient to keep close.',
    rhythmSub2: 'What the body gives away first',
    rhythmCopy2: 'While observing, his eyes go to the hands first. When guarded, he adjusts a cuff. The angrier he becomes, the slower his movements tend to get.',
    logicTitle: 'Operational logic',
    logicItem1: 'When risk appears, he shifts himself into its path first.',
    logicItem2: 'He rearranges space before he explains anything.',
    logicItem3: 'Cowardice and responsibility avoidance draw contempt fast.',
    logicItem4: 'Courtesy functions less as softness than as control.',
    textureTitle: 'Small details that keep him human',
    textureItem1: 'He still lives in the second-floor SW7 mews house where he has lived since birth.',
    textureItem2: 'The notion of someone waiting for him home can stop him for a beat.',
    textureItem3: 'The habit of reading other people before reading himself never quite left.',
    textureItem4: 'Once interest forms, care and control begin to arrive in the same hand.',
    gateEyebrow: 'BACKGROUND / LOCKED',
    gateTitleLocked: 'The growth background does not open on first contact.',
    gateLeadLocked: 'His past stays beneath the visible surface. Hold the seal to arm the file, then enter the chronology in the correct order to declassify it.',
    gateTitleUnlocked: 'Background access granted',
    gateLeadUnlocked: 'The sealed chronology has been released. Noel’s past now sits inside the body of the file.',
    sealCore: 'Hold',
    gateStatusIdle: 'Press and hold to arm the file.',
    gateStatusNeedArm: 'Arm the file by holding the seal first.',
    gateStatusArmed: 'File armed. Enter 1992 → 2010 → 2016.',
    gateStatusReject: 'Sequence rejected. Reset chronology and try again.',
    gateStatusUnlocked: 'Background access granted. File declassified.',
    gateStatusProgress: (value) => `Record ${value}/3 confirmed.`,
    gateHint: 'Hint: memory opens in chronological order.',
    seq1992: 'ORIGIN',
    seq2010: 'FRACTURE',
    seq2016: 'RECRUIT',
    unlockPending: 'LOCKED',
    unlockGranted: 'GRANTED',
    timelineTitle1: 'A perfect house with no warmth to spare',
    timelineCopy1: 'He grew up under a world-class orchestra conductor for a father and a senior auction-house curator for a mother. Beauty was everywhere. Warmth was not. He learned to read expression before speaking his own.',
    timelineTitle2: 'The first fracture arrived with rain',
    timelineCopy2: 'On a night before university entrance exams, one call carried news of a chain collision and both parents dead. He did not cry. Later, he made that absence into a private verdict about himself.',
    timelineTitle3: 'Cambridge and the grammar of reading people',
    timelineCopy3: 'At Cambridge PBS, he treated psychology and behaviour not as abstract study but as a manual for living. He graduated top of his class, then moved into doctoral work on behaviour mechanisms and non-verbal communication.',
    timelineTitle4: 'The moment defect became talent',
    timelineCopy4: 'MI6 had been circling him for some time. Two days before graduation, the formal approach arrived, reframing his emotional detachment as a rare operational asset rather than a flaw.',
    timelineTitle5: 'Noel in the present tense',
    timelineCopy5: 'He is now an MI6 Senior HUMINT Case Officer specialising in NOC operations. He treats his own emotional quiet not as absence, but as superior precision, and builds himself on that belief.',
    dateStrip1: '22.12.1992 / Birth',
    dateStrip2: '01.2010 / Parents deceased',
    dateStrip3: '10.2010 / Cambridge PBS',
    dateStrip4: '06.2013 / Top graduate',
    dateStrip5: '07.2016 / MI6 approach before graduation',
    dateStrip6: '03.2026 / 10th year Senior HUMINT',
    notesEyebrow: 'FIELD NOTES',
    notesTitle: 'How observation, control, and deprivation align inside one person',
    notesLead: 'This remains an introduction page, but it avoids ending as a static specification sheet by leaving behavioural texture intact.',
    notesCardTitle1: 'What he notices first',
    notesCardCopy1: 'Hands first, then eyes, then the tone and pace of a voice. In a room, he reads exits and lighting before comfort.',
    notesCardTitle2: 'Under pressure',
    notesCardCopy2: 'His sentences do not get shorter so much as sharper. Questions turn confirmatory. Movement slows and clears.',
    notesCardTitle3: 'How he comforts',
    notesCardCopy3: 'He sits someone down, clears the space, changes what needs changing, and only then speaks. Comfort begins with arrangement.',
    notesCardTitle4: 'The closer he gets',
    notesCardCopy4: 'Explanation decreases. Action increases. Care and control start arriving in the same sentence.',
    footerLine: 'Static build / GitHub Pages ready / No external build step required.',
    switchTo: 'Switch to Korean'
  }
};

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || 'ko',
  armed: false,
  unlocked: localStorage.getItem(STORAGE_KEYS.unlocked) === 'true',
  seqIndex: 0
};

const sequence = ['1992', '2010', '2016'];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pointerIsFine = window.matchMedia('(pointer: fine)').matches;

const langToggle = document.getElementById('langToggle');
const langIndicator = document.getElementById('langIndicator');
const gateTitle = document.getElementById('gateTitle');
const gateLead = document.getElementById('gateLead');
const gateStatus = document.getElementById('gateStatus');
const unlockPill = document.getElementById('unlockPill');
const backgroundShell = document.getElementById('backgroundShell');
const sealButton = document.getElementById('sealButton');
const progressBar = document.getElementById('sequenceProgressBar');
const sequenceNodes = Array.from(document.querySelectorAll('.sequence-node'));
const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));
const tiltPanel = document.querySelector('.tilt-panel');

function t(key) {
  return copy[state.lang][key];
}

function setText(el, value) {
  if (!el) return;
  el.textContent = value;
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-copy]').forEach((el) => {
    const key = el.dataset.copy;
    const value = copy[state.lang][key];
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  langIndicator.textContent = state.lang === 'ko' ? 'EN' : 'KR';
  langToggle.setAttribute('aria-label', t('switchTo'));
  updateGateText();
  localStorage.setItem(STORAGE_KEYS.lang, state.lang);
}

function updateGateText(customStatusKey, customStatusValue) {
  if (state.unlocked) {
    setText(gateTitle, t('gateTitleUnlocked'));
    setText(gateLead, t('gateLeadUnlocked'));
    setText(unlockPill, t('unlockGranted'));
    setText(gateStatus, customStatusValue || t(customStatusKey || 'gateStatusUnlocked'));
    return;
  }

  setText(gateTitle, t('gateTitleLocked'));
  setText(gateLead, t('gateLeadLocked'));
  setText(unlockPill, t('unlockPending'));

  if (customStatusValue) {
    setText(gateStatus, customStatusValue);
  } else if (customStatusKey) {
    setText(gateStatus, t(customStatusKey));
  } else {
    setText(gateStatus, state.armed ? t('gateStatusArmed') : t('gateStatusIdle'));
  }
}

function updateSequenceProgress() {
  const percent = (state.seqIndex / sequence.length) * 100;
  progressBar.style.width = `${percent}%`;
}

function resetSequence(showReject = false) {
  state.seqIndex = 0;
  sequenceNodes.forEach((node) => node.classList.remove('active'));
  updateSequenceProgress();

  if (showReject) {
    sequenceNodes.forEach((node) => {
      node.classList.add('rejected');
      window.setTimeout(() => node.classList.remove('rejected'), 380);
    });
    updateGateText('gateStatusReject');
  } else {
    updateGateText();
  }
}

function setArmed(value) {
  state.armed = value;
  document.body.classList.toggle('gate-armed', value || state.unlocked);
  if (!state.unlocked) {
    updateGateText();
  }
}

function unlockBackground() {
  state.unlocked = true;
  state.armed = true;
  state.seqIndex = sequence.length;
  localStorage.setItem(STORAGE_KEYS.unlocked, 'true');
  document.body.classList.add('gate-armed', 'gate-unlocked');
  backgroundShell.classList.remove('locked');
  backgroundShell.classList.add('unlocked');
  sequenceNodes.forEach((node) => node.classList.add('active'));
  updateSequenceProgress();
  updateGateText('gateStatusUnlocked');
}

function initialiseUnlockedState() {
  if (!state.unlocked) return;
  backgroundShell.classList.remove('locked');
  backgroundShell.classList.add('unlocked');
  document.body.classList.add('gate-armed', 'gate-unlocked');
  state.armed = true;
  state.seqIndex = sequence.length;
  sequenceNodes.forEach((node) => node.classList.add('active'));
  updateSequenceProgress();
}

function handleSequenceInput(value) {
  if (state.unlocked) return;

  if (!state.armed) {
    updateGateText('gateStatusNeedArm');
    return;
  }

  const expected = sequence[state.seqIndex];

  if (value === expected) {
    const node = sequenceNodes.find((item) => item.dataset.seq === value);
    if (node) node.classList.add('active');
    state.seqIndex += 1;
    updateSequenceProgress();

    if (state.seqIndex >= sequence.length) {
      unlockBackground();
      return;
    }

    updateGateText(null, t('gateStatusProgress')(state.seqIndex));
    return;
  }

  resetSequence(true);
}

sequenceNodes.forEach((node) => {
  node.addEventListener('click', () => handleSequenceInput(node.dataset.seq));
});

let holdFrame = null;
let holdStart = 0;
const HOLD_DURATION = 1100;

function updateHoldProgress(progress) {
  sealButton.style.setProperty('--hold-progress', `${Math.max(0, Math.min(progress, 1)) * 360}deg`);
}

function cancelHold(resetVisual = true) {
  if (holdFrame) cancelAnimationFrame(holdFrame);
  holdFrame = null;
  if (!state.armed && resetVisual) {
    updateHoldProgress(0);
  }
}

function armStep(now) {
  const elapsed = now - holdStart;
  const progress = Math.min(elapsed / HOLD_DURATION, 1);
  updateHoldProgress(progress);

  if (progress >= 1) {
    setArmed(true);
    updateHoldProgress(1);
    return;
  }

  holdFrame = requestAnimationFrame(armStep);
}

function startHold() {
  if (state.unlocked || state.armed) return;
  holdStart = performance.now();
  cancelHold(false);
  holdFrame = requestAnimationFrame(armStep);
}

sealButton.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' || event.pointerType === 'touch' || event.pointerType === 'pen') {
    startHold();
  }
});

['pointerup', 'pointerleave', 'pointercancel'].forEach((name) => {
  sealButton.addEventListener(name, () => cancelHold(true));
});

langToggle.addEventListener('click', () => {
  state.lang = state.lang === 'ko' ? 'en' : 'ko';
  applyLanguage();
});

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
}

function setupTilt() {
  if (!tiltPanel || !pointerIsFine || prefersReducedMotion) return;

  const maxTilt = 10;
  tiltPanel.addEventListener('pointermove', (event) => {
    const rect = tiltPanel.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt;
    const rotateX = (0.5 - py) * maxTilt;
    tiltPanel.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  tiltPanel.addEventListener('pointerleave', () => {
    tiltPanel.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}

function setupShader() {
  const canvas = document.getElementById('shader-canvas');
  if (!canvas || prefersReducedMotion) {
    document.documentElement.classList.add('no-webgl');
    return;
  }

  const gl = canvas.getContext('webgl', {
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
    premultipliedAlpha: false
  });

  if (!gl) {
    document.documentElement.classList.add('no-webgl');
    return;
  }

  const vertexSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_pointer;
    uniform float u_scroll;

    #define PI 3.141592653589793

    mat2 rot(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }

    float sdBox(vec3 p, vec3 b) {
      vec3 q = abs(p) - b;
      return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
    }

    float mapScene(vec3 p) {
      vec3 q = p;
      q.z = mod(q.z + 1.5, 3.0) - 1.5;

      float ring = abs(length(q.xy) - 1.02) - 0.03;
      float glass = sdBox(q, vec3(0.88, 0.52, 0.02));
      float slit = sdBox(q - vec3(0.0, 0.34, 0.0), vec3(0.42, 0.006, 0.03));
      float traceA = sdBox(q - vec3(0.56 * sin(p.z * 0.42), 0.25 * cos(p.z * 0.25), 0.0), vec3(0.24, 0.004, 0.05));
      float traceB = sdBox(q - vec3(-0.54 * cos(p.z * 0.33), -0.28 * sin(p.z * 0.22), 0.0), vec3(0.28, 0.004, 0.05));

      float shell = min(min(ring, glass), min(slit, min(traceA, traceB)));

      vec3 c = p;
      c.x = abs(c.x) - 1.45;
      float columnDepth = mod(p.z + 3.5, 7.0) - 3.5;
      float columns = sdBox(vec3(c.x, c.y + 0.16 * sin(p.z * 0.3), columnDepth), vec3(0.03, 0.88, 0.18));

      return min(shell, columns);
    }

    vec3 getNormal(vec3 p) {
      vec2 e = vec2(0.0009, 0.0);
      return normalize(vec3(
        mapScene(p + e.xyy) - mapScene(p - e.xyy),
        mapScene(p + e.yxy) - mapScene(p - e.yxy),
        mapScene(p + e.yyx) - mapScene(p - e.yyx)
      ));
    }

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
      vec2 pointer = u_pointer * 2.0 - 1.0;
      float time = u_time * 0.24;

      vec3 ro = vec3(0.0, 0.0, -4.6 + u_scroll * 0.55);
      vec3 rd = normalize(vec3(uv, 1.42));

      float autoYaw = sin(time * 0.8) * 0.08;
      float autoPitch = sin(time * 0.4) * 0.05;
      rd.xz *= rot(pointer.x * 0.38 + autoYaw);
      rd.yz *= rot(-pointer.y * 0.26 + autoPitch);
      ro.x += pointer.x * 0.16;
      ro.y += pointer.y * 0.11;

      float t = 0.0;
      float glow = 0.0;
      float edge = 0.0;
      float hit = 0.0;
      vec3 pos = ro;

      for (int i = 0; i < 72; i++) {
        pos = ro + rd * t;
        float d = mapScene(pos);
        glow += 0.015 / (0.03 + abs(d)) * smoothstep(9.2, 0.0, t);
        edge += exp(-abs(d) * 30.0) * 0.010;
        if (d < 0.0015) {
          hit = 1.0;
          break;
        }
        t += clamp(d * 0.68, 0.024, 0.18);
        if (t > 10.0) break;
      }

      vec3 colour = vec3(0.018, 0.024, 0.032);
      float vignette = smoothstep(1.55, 0.08, length(uv));
      colour += vec3(0.030, 0.037, 0.05) * (1.0 - vignette) * 0.28;

      if (hit > 0.5) {
        vec3 n = getNormal(pos);
        float diff = max(dot(n, normalize(vec3(-0.26, 0.44, -0.68))), 0.0);
        float fresnel = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
        float rim = pow(1.0 - max(dot(n, normalize(vec3(0.0, 0.0, -1.0))), 0.0), 2.0);
        vec3 cool = vec3(0.16, 0.20, 0.26) * diff;
        vec3 warm = vec3(0.74, 0.62, 0.42) * (fresnel * 0.34 + rim * 0.16);
        colour += cool + warm;
      }

      colour += glow * vec3(0.055, 0.070, 0.11);
      colour += edge * vec3(0.32, 0.28, 0.19);

      float sweep = sin(gl_FragCoord.y * 1.08 + time * 16.0) * 0.5 + 0.5;
      colour *= 0.974 + sweep * 0.026;

      float pulse = 0.5 + 0.5 * sin(time * 3.2 + length(pointer) * 4.8);
      colour += pulse * 0.010 * vec3(0.42, 0.34, 0.18);

      float grain = hash(gl_FragCoord.xy + time * 100.0);
      colour += (grain - 0.5) * 0.016;
      colour *= vignette;

      gl_FragColor = vec4(colour, 1.0);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(message || 'Shader compilation failed.');
    }
    return shader;
  }

  function createProgram(vsSource, fsSource) {
    const program = gl.createProgram();
    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const message = gl.getProgramInfoLog(program);
      throw new Error(message || 'Program link failed.');
    }

    return program;
  }

  let program;
  try {
    program = createProgram(vertexSource, fragmentSource);
  } catch (error) {
    console.error(error);
    document.documentElement.classList.add('no-webgl');
    return;
  }

  const positionLocation = gl.getAttribLocation(program, 'position');
  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const pointerLocation = gl.getUniformLocation(program, 'u_pointer');
  const scrollLocation = gl.getUniformLocation(program, 'u_scroll');

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  gl.useProgram(program);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const pointer = {
    x: 0.5,
    y: 0.5,
    tx: 0.5,
    ty: 0.5,
    touched: false
  };

  function updatePointerFromEvent(event) {
    pointer.tx = event.clientX / window.innerWidth;
    pointer.ty = 1 - event.clientY / window.innerHeight;
    pointer.touched = true;
  }

  window.addEventListener('pointermove', updatePointerFromEvent, { passive: true });

  if (!pointerIsFine) {
    window.addEventListener(
      'touchmove',
      (event) => {
        const touch = event.touches[0];
        if (!touch) return;
        pointer.tx = touch.clientX / window.innerWidth;
        pointer.ty = 1 - touch.clientY / window.innerHeight;
        pointer.touched = true;
      },
      { passive: true }
    );
  }

  let scrollRatio = 0;
  const onScroll = () => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    scrollRatio = window.scrollY / maxScroll;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, pointerIsFine ? 1.45 : 1.15);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  let rafId = null;
  const start = performance.now();

  function render(now) {
    const elapsed = (now - start) * 0.001;

    if (!pointerIsFine && !pointer.touched) {
      pointer.tx = 0.5 + Math.sin(elapsed * 0.5) * 0.12;
      pointer.ty = 0.5 + Math.cos(elapsed * 0.35) * 0.08;
    }

    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;

    gl.useProgram(program);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, elapsed);
    gl.uniform2f(pointerLocation, pointer.x, pointer.y);
    gl.uniform1f(scrollLocation, scrollRatio);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    rafId = requestAnimationFrame(render);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      return;
    }

    if (!rafId) {
      rafId = requestAnimationFrame(render);
    }
  });

  rafId = requestAnimationFrame(render);
}

applyLanguage();
setupRevealObserver();
setupTilt();
initialiseUnlockedState();
setupShader();
updateSequenceProgress();
updateHoldProgress(state.unlocked ? 1 : 0);
updateGateText();
