console.log('Homework 20');

// Homework 20
// Реализуйте класс PublicService для подсчета коммунальных платежей.

// В классе должны быть реализованы такие методы:
// addMeterReadings для добавления показаний счетчиков, принимает 2 аргумента: название показателя и объем потребеления
// deleteMeterReadings для удаления показаний счетчиков, принимает 1 аргумент: название показателя
// getSum для подсчета суммы платежей исходя из показаний поданых счетчиков и текущих тарифов.
// Тарифы можете придумать свои, или взять из примера.
// Метод addMeterReadings должен быть защищен от передачи некорректных значений. Если при его вызове, было передано название показателя, которое не перечислено в тарифах, то метод должен выбросить ошибку с текстом: Service --название сервиса-- is unavailble. Так же, если показания подаются повторно (метод вызван второй раз с таким же названием показателя), то должна быть выброшена ошибка с текстом: Service --название сервиса-- is already included
// Метод getSum возвращает результат подсчета суммы.
// Все методы должны быть записаны в prototype.
// Пример тарифов:

// {
//   hotWater: 7,
//   coldWater: 1,
//   gas: 0.3,
//   electricity: 1.6,
// }
// Пример работы с вышеуказанными тарифами:

// const service = new PublicService();

// service.addMeterReadings(100, "hotWater");
// service.addMeterReadings(200, "coldWater");
// service.deleteMeterReadings("coldWater");
// service.addMeterReadings(300, "electricity");

// const res = service.getSum();

const tariff = {
      hotWater: 7,
      coldWater: 1,
      gas: 0.3,
      electricity: 1.6,
    }

function PublicService() {

    this.tariff = tariff;

    this.services = [];

}

PublicService.prototype.addMeterReadings = function (consumptionVolume, tariffName) {

    if (!Object.keys(this.tariff).includes(tariffName)) {
        throw new Error(`Service ${tariffName} is unavailable`);
    }

    if (this.services.some(( {key} ) => key ===  tariffName)){
        throw new Error(`Service ${tariffName} is already included`);
    }

    this.services.push({key: tariffName, consumptionVolume});

}

PublicService.prototype.deleteMeterReadings = function (tariffName) {
    this.services = this.services.filter(({key}) => key !== tariffName);
}

PublicService.prototype.getSum = function() {
    let sum = 0;

    this.services.forEach(({key, consumptionVolume}) => {
        sum += this.tariff[key] * consumptionVolume
    })

    return sum;
}

const service = new PublicService();

service.addMeterReadings(100, 'hotWater');
service.addMeterReadings(200, 'coldWater');
service.deleteMeterReadings('coldWater');
service.addMeterReadings(300, 'electricity');

const resultSum = service.getSum();

console.log('resultSum', resultSum);