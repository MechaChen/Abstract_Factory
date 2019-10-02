interface IBeverageProvide {
    AddMaterial(): void;
    Brew(): void;
    PouredCup(): void;
}

class GreenTea implements IBeverageProvide {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class BlackTea implements IBeverageProvide {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class MilkTea implements IBeverageProvide {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

function CreateBeverage(pBeverageType: string) {
    let beverage: IBeverageProvide;

    switch(pBeverageType) {
        case 'GreenTea':
            return beverage = new GreenTea();
        case 'BlackTea':
            return beverage = new BlackTea();
        case 'MilkTea':
            return beverage = new MilkTea();
        default:
            return null;
    }
}