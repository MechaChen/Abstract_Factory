import chalk from 'chalk';

interface IBeverageProvideB {
    AddMaterial(): void;
    Brew(): void;
    PouredCup(): void;
}

class GreenTeaB implements IBeverageProvideB {
    greenText(text: string) {
        console.log(chalk.green(text));
    }
    AddMaterial() {
        this.greenText('店員：加入綠茶包');
    };
    Brew() {
        this.greenText('店員：沖泡中');
    };
    PouredCup() {
        this.greenText('店員：將綠茶裝杯');
    };
}
 
class BlackTeaB implements IBeverageProvideB {
    redText(text: string) {
        console.log(chalk.red(text));
    }
    AddMaterial() {
        this.redText('店員：加入紅茶包');
    };
    Brew() {
        this.redText('店員：沖泡中');
    };
    PouredCup() {
        this.redText('店員：將紅茶裝杯');
    };
}
 
class MilkTeaB implements IBeverageProvideB {
    milkText(text: string) {
        console.log(chalk.magenta(text));
    }
    AddMaterial() {
        this.milkText('店員：加入奶茶包');
    };
    Brew() {
        this.milkText('店員：中泡中');
    };
    PouredCup() {
        this.milkText('店員：將奶茶裝杯');
    };
}

interface IBeverageFactoryB {
    CreateBeverage(): IBeverageProvideB;
}

class GreenTeaFactoryB implements IBeverageFactoryB {
    CreateBeverage(): IBeverageProvideB {
        return new GreenTeaB();
    }
}

class BlackTeaFactoryB implements IBeverageFactoryB {
    CreateBeverage(): IBeverageProvideB {
        return new BlackTeaB();
    }
}

class MilkTeaFactoryB implements IBeverageFactoryB {
    CreateBeverage(): IBeverageProvideB {
        return new MilkTeaB();
    }
}

class BeverageStores {
    _factory: IBeverageFactoryB;

    constructor(pFactory: IBeverageFactoryB) {
        this._factory = pFactory;
    }

    BeverageOrders() {
        let beverage: IBeverageProvideB;
        beverage = this._factory.CreateBeverage();

        beverage.AddMaterial();
        beverage.Brew();
        beverage.PouredCup();

        return beverage;
    }
}

// Let's make some tea ~~
const greenStore = new BeverageStores(new GreenTeaFactoryB());
greenStore.BeverageOrders();

const blackStore = new BeverageStores(new BlackTeaFactoryB());
blackStore.BeverageOrders();

const milkStore = new BeverageStores(new MilkTeaFactoryB());
milkStore.BeverageOrders();