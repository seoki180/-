# 인생네컷 아카이빙 서비스 ( 가제 : 네컷다이어리 )

인생네컷류 사진을 한곳에 모아 추억을 저장해보세요! 어디서든 찍은 사진을 앱 올려 친구와 같이 볼수 있습니다. 서로의 사진에 코멘트를 남겨주고 추억을 공유하세요

## 🎯 Todo

1. 회원가입, 로그인, 유저DB구현하기
2. 유저 DB에 개인 사진 DB추가해 라이브러리 구현
3. 사진업로드하는 기능
4. 사진에 코멘트 남기기 기능
5. 사진 찍은 위치와 시간 데이터 추가
6. 유저간 라이브러리에서 코멘트 남기기 기능
7. 숨김라이브러리 기능

## 🛠️ Tool

- FE : 안드로이드 스튜디오(코틀린) or 플러터(Dart)
- BE : Nodejs , Express
- DB : Mysql, MongoDB

### 🐱 Git convention

1. 모든 배포는 main에서 진행한다. main branch는 건드리지 않도록
2. FE, BE, developFE, developBE branch로 나누어 작업
3. 기능이 완성된다면 FE, BE 브랜치를 통합해 main branch에 업로드
4. 기능 개발은 develop branch에서 진행

### ⚖️ Commit convention

```
1. Feat : ' ' -> 기능추가 , 삭제 , 변경
2. Fix : ' ' -> 버그 수정
3. Refactor : ' ' -> 코드 구조 변경, 리팩토링
4. Test : ' ' -> 테스트 기능 구현, 삭제예정
5. Style : ' ' -> 코드 스타일, 구조 변경, 동작에 영향 X
5. Docs : ' ' -> Readme 등 문서 변경
6. Etc : ' ' -> 위에 해당하지 않는 여러 사유

```
