function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

const hw = helloWorldGenerator();