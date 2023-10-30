애플리케이션 모듈(js, css, scss/sass, images, font)들을 `의존성 분석` 을 하여 하나의 `js` 로 묶는 도구
2. 최종 결과물인 하나의 `js` 파일을 번들(bundle) 이라 하고 묶는 작업을 (bundling) 이라 한다.
3. 빌드작업(js)
	1. linting(EsLint, 문법체크) 작업
	2. document(JSDocs) 작업
	3. test(Mocha, jest) 작업
	4. 난독/압축(uglify) 작업
	5. 번들링
4. js 모듈뿐만 아니라 에셋(images, css, sass/scss, font