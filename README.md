## design_system

design_system

<br />

## 명령어 모음

### lerna bootstrap

- 모든 package에서 node_module을 설치(심볼릭 링크 연결)
- 최적화를 통해 중복된 모듈을 정리

### lerna version

- 마지막 커밋과 차이가 있는 패키지를 파악하여 버전 변경
- 심볼릭 링크가 걸려있는 dependancy 버전까지 적용

### lerna publish

- 패키지를 NPM Repository에 배포

### lerna clean

- Root를 제외한 package에서 node_module을 제거
- 클린빌드의 목적으로 사용

### lerna run

- 각 패키지의 package.json안에 명시되어있는 script 실행
- \- parallel 옵션으로 병렬로 script 실행 가능

<br />

## env

```
BASE_REGISTRY_URI=...
```
