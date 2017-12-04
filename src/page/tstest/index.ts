import * as $ from 'jquery';

class SerializationHelper {
  static toInstanceByString<T>(obj: T, json: string) : T {
    const jsonObj = JSON.parse(json);

    return this.toInstanceByObject(obj, jsonObj);
  }
  static toInstanceByObject<T>(obj: T, jsonObj: object) : T {
    if (typeof obj['fromJSON'] === 'function') {
      obj['fromJSON'](jsonObj);
    } else {
      for (const propName in jsonObj) {
        obj[propName] = jsonObj[propName];
      }
    }

    return obj;
  }
}

class PageData {
  showText:String;
}

abstract class Page {
  constructor() {
    this.initEvent();
    this.initData()
        .then(() => this.initView());
  }
  pageData:PageData;
  abstract initEvent():void;
  abstract initData():Promise<any>;
  abstract initView():void;
}

class App extends Page{
  constructor() {
    super();
  }
  pageData; 
  myData:String = 'abc';
  initEvent() {
    $('p').click(() => this.showData());
  }
  showData() {
    alert(this.myData);
  }
  initData() {
    return Promise.resolve({ showText: '456' })
        .then((data:object) => {
          this.pageData = SerializationHelper.toInstanceByObject(new PageData(),data);
        });
  }
  initView() {
    $('#showText').text(this.pageData.showText);
  }
}

const app = new App();
