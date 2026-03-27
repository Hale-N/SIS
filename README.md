# NOEL / Unofficial Dossier

A static, GitHub Pages–ready character page for **Noel Hale**.

## Included

- `index.html` — page structure
- `styles.css` — visual system, layout, motion, responsive rules
- `app.js` — language toggle, hidden background gate, pointer tilt, WebGL shader

## Core experience

- High-end dark dossier aesthetic with thin-line UI and restrained detail
- Full-screen **3D shader background** with mouse / touch response
- **Korean / English** toggle via the globe button in the top-right corner
- **Locked growth background** that only opens after a custom interaction:
  - hold the seal
  - enter the chronology in order: **1992 → 2010 → 2016**
- Responsive layout tuned for desktop and mobile
- No build step required

## Deploy on GitHub Pages

### Option 1 — repository root

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose your main branch and **/root**.
6. Save.

### Option 2 — `/docs` folder

1. Create a repository.
2. Put this folder's contents inside `/docs`.
3. In **Settings → Pages**, choose the main branch and **/docs**.
4. Save.

## Notes

- The page uses a WebGL shader for the background. If WebGL is unavailable, the page falls back to layered gradients.
- The hidden background state is stored in `localStorage` after unlock.
- Some atmosphere-specific tokens such as `DOB`, `MI6`, `NOC`, and `NOEL` stay untranslated by design.
- The page currently uses Google Fonts. If you want a fully offline version, replace the font import in `index.html` with a system font stack.

## Easy custom edits

- Change text in `app.js` inside the `copy` object.
- Adjust colours and spacing in `styles.css` under `:root`.
- Tune shader feel in `app.js` inside `setupShader()`.
- To reset the hidden background locally, clear this key in the browser:
  - `localStorage.removeItem('noel-dossier-unlocked')`

***

# NOEL / 비공식 기록물 (Unofficial Dossier)

**노엘 헤일(Noel Hale)**을 위한 GitHub Pages용 정적 캐릭터 페이지입니다.

## 포함 파일

- `index.html` — 페이지 구조
- `styles.css` — 시각 시스템, 레이아웃, 모션 및 반응형 규칙
- `app.js` — 언어 전환, 숨겨진 배경 게이트, 포인터 틸트(tilt), WebGL 셰이더

## 핵심 경험

- 절제된 디테일과 얇은 라인의 UI를 활용한 고급스러운 다크 도시에(dossier) 미학
- 마우스 및 터치에 반응하는 전체 화면 **3D 셰이더 배경**
- 우측 상단 지구본 버튼을 통한 **한국어 / 영어** 전환
- 특정 상호작용을 통해서만 해제되는 **잠겨진 성장 배경**:
  - 인장(seal)을 길게 누르기
  - 연대기를 순서대로 입력: **1992 → 2010 → 2016**
- 데스크톱과 모바일에 최적화된 반응형 레이아웃
- 별도의 빌드 과정 없이 즉시 사용 가능

## GitHub Pages 배포 방법

### 방법 1 — 저장소 루트(root) 활용

1. GitHub 저장소를 생성합니다.
2. 이 폴더의 내용을 저장소 루트에 업로드합니다.
3. GitHub에서 **Settings → Pages** 메뉴로 이동합니다.
4. Source 설정을 **Deploy from a branch**로 선택합니다.
5. 메인 브랜치(main)와 **/root** 경로를 선택합니다.
6. 저장(Save)합니다.

### 방법 2 — `/docs` 폴더 활용

1. 저장소를 생성합니다.
2. 이 폴더의 내용을 `/docs` 폴더 안에 넣습니다.
3. **Settings → Pages**에서 메인 브랜치와 **/docs** 경로를 선택합니다.
4. 저장(Save)합니다.

## 참고 사항

- 배경에는 WebGL 셰이더가 사용되었습니다. WebGL을 지원하지 않는 환경에서는 레이어드 그라데이션 배경으로 자동 대체됩니다.
- 배경 잠금 해제 상태는 브라우저의 `localStorage`에 저장됩니다.
- 분위기 연출을 위해 `DOB`, `MI6`, `NOC`, `NOEL`과 같은 특정 용어들은 의도적으로 번역하지 않고 유지했습니다.
- 현재 Google Fonts를 사용하고 있습니다. 완전한 오프라인 버전을 원하신다면 `index.html`의 폰트 임포트 부분을 시스템 폰트 스택으로 교체하세요.

## 간편한 커스텀 수정

- 텍스트 수정: `app.js` 파일 내 `copy` 객체 내부의 내용을 변경하세요.
- 색상 및 간격 조정: `styles.css` 파일의 `:root` 섹션에서 수정할 수 있습니다.
- 셰이더 느낌 조정: `app.js` 파일 내 `setupShader()` 함수에서 조절 가능합니다.
- 로컬 환경에서 잠금 해제 상태를 초기화하려면 브라우저 콘솔에서 다음 키를 삭제하세요:
  - `localStorage.removeItem('noel-dossier-unlocked')`

