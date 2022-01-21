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
/*
{
    // Step-1
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
}
*/

{
    // Step-2 재사용성 증가
    // 스킬 사용 함수
    const usePrimarySkill = function () {};
    const useSecondarySkill = function () {
        const job = Object.getPrototypeOf(this).job;
        const skill = Object.getPrototypeOf(this).skill;

        switch (job) {
            case "전사":
                console.log(`${this.name}이(가) ${skill}을(를) 시전했다.`);
                break;
            case "마법사":
                console.log(`${this.name}이(가) ${skill}을(를) 시전했다.`);
                break;
            case "도적":
                console.log(`${this.name}이(가) ${skill}을(를) 시전했다.`);
                break;
        }
    };

    const useTertiarySkill = function () {
        console.log(`${this.name}이(가) ${this.skill}을(를) 시전했다.`);
    };

    // 모험가(1차)
    const charactor = {
        begin: "모험가",
        skill: "사자후",
        shoutOut: function () {
            console.log(`${this.name}이(가) ${charactor.skill}을(를) 시전했다.`);
        },
    };

    // 모험가(2차)
    function Job(job, skill, ...arg) {
        this.job = job;
        this.skill = skill;

        if (job === "전사") {
            this.finalAttack = useSecondarySkill;
        } else if (job === "마법사") {
            this.energyVolt = useSecondarySkill;
        } else if (job === "도적") {
            this.luckySeven = useSecondarySkill;
        }

        Object.setPrototypeOf(this, charactor);
    }

    // 모험가(3차)
    function DetailJob(name, skill, job, ...arg) {
        this.name = name;
        this.skill = skill;

        if (name === "히어로") {
            this.madness = useTertiarySkill;
        } else if (name === "다크나이트") {
            this.darkImpale = useTertiarySkill;
        } else if (name === "썬콜") {
            this.chainLightning = useTertiarySkill;
        } else if (name === "불독") {
            this.dotPunisher = useTertiarySkill;
        } else if (name === "듀얼블레이드") {
            this.phantomBlow = useTertiarySkill;
        } else if (name === "나이트로드") {
            this.showDown = useTertiarySkill;
        }

        Object.setPrototypeOf(this, job);
    }

    const warrior = new Job("전사", "파이널 어택");
    const wizard = new Job("마법사", "에너지 볼트");
    const thief = new Job("도적", "럭키 세븐");

    const hero = new DetailJob("히어로", "분노", warrior);
    const darkKnight = new DetailJob("다크나이트", "다크임페일", warrior);
    const sunCall = new DetailJob("썬콜", "체인라이트닝", wizard);
    const bullDog = new DetailJob("불독", "도트퍼니셔", wizard);
    const nightrod = new DetailJob("나이트로드", "쇼다운", thief);
    const dualBlade = new DetailJob("듀얼블레이드", "팬텀블로우", thief);

    hero.madness(); // 히어로이(가) 분노을(를) 시전했다.
    hero.finalAttack(); // 히어로이(가) 파이널 어택을(를) 시전했다.
    hero.shoutOut(); // 히어로이(가) 사자후을(를) 시전했다.

    sunCall.energyVolt(); // 썬콜이(가) 에너지 볼트을(를) 시전했다.
    sunCall.finalAttack(); // error : ... is not a function!
}
