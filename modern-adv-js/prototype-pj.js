/*
     rpg게임 메이플 스토리 캐릭터 특징 정리

정리 내용

1 전직업 공용 스킬 2 // 캐릭터 
- 사자후

2 직업군 공용 스킬 1 // 직업군
- 전사 : 파이널 어택
- 마법사: 에너지 볼트
- 도적 : 럭키 세븐

3 상세 직업 개인 스킬 1 
- 히어로 : 분노
- 다크나이트 : 다크 임페일

- 썬콜: 체인 라이트닝
- 불독: 도트 퍼니셔

- 나이트로드: 쇼다운
- 듀블: 팬텀 블로우

*/

//캐릭터
const charactor = {
    skill: "사자후",
    shoutOut: function () {
        console.log(`${this.name}이(가) ${charactor.skill}을(를) 시전했다.`);
    },
};

//직업군
const warrior = {
    job: "전사",
    skill: "파이널 어택",
    finalAttack: function () {
        console.log(`${this.name}이(가) ${warrior.skill}을(를) 시전했다.`);
    },
    __proto__: charactor,
};
const wizard = {
    job: "마법사",
    skill: "에너지 볼트",
    energyVolt: function () {
        console.log(`${this.name}이(가) ${wizard.skill}을(를) 시전했다.`);
    },
    __proto__: charactor,
};
const thief = {
    job: "도적",
    skill: "럭키세븐",
    luckySeven: function () {
        console.log(`${this.name}이(가) ${thief.skill}을(를) 시전했다.`);
    },
    __proto__: charactor,
};

// 상세 직업
const hero = {
    name: "히어로",
    skill: "분노",
    madness: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: warrior,
};
// Object.setPrototypeOf(hero, warrior);

console.log(hero.name); // 히어로
console.log(hero.job); // 전사

hero.shoutOut(); // 히어로이(가) 사자후을(를) 시전했다.
hero.finalAttack(); //히어로이(가) 파이널 어택을(를) 시전했다.
hero.madness(); // 히어로이(가) 분노을(를) 시전했다.

const darkKnight = {
    name: "다크나이트",
    skill: "다크임페일",
    darkImpale: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: warrior,
};

const sunCall = {
    name: "썬콜",
    skill: "체인라이트닝",
    chainLightning: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: wizard,
};
const bullDog = {
    name: "불독",
    skill: "도트퍼니셔",
    dotPunisher: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: wizard,
};

const nightrod = {
    name: "나이트로드",
    skill: "쇼다운",
    showDown: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: thief,
};
const dualBlade = {
    name: "듀얼블레이드",
    skill: "팬텀블로우",
    phantomBlow: function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    },
    __proto__: thief,
};
