export class baseClass {
  constructor(domElement) {
    this.domElement = domElement;
    this.children = [];
    this.init(this.domElement);
    //console.log(this.children);
    console.log(this);
  }

  
  init(domElement) {
    for (let child of domElement.children) {
      //нужно импортировать js реализацию каждого блока ребёнка
      //если js реализации нет, создать болванку

      for(let c of child.classList) {
        //сделаем допущение, что на одном DOM-элементе может быть только один класс (что не верно, ибо это не так)

        let prom;
        switch(this.checkClassBem(c)) {
          case 'block':
            prom = import('../' + this.pathToModuleBlock(c) + '.js');
            prom.then(
              result => this.handlerImportResult(result, child), 
              error => this.handlerImportError(error, child)
            );
            break;
          case 'element':
            prom = import('../' + this.pathToModuleElement(c) + '.js');
            prom.then(
              result => this.handlerImportResult(result, child), 
              error => this.handlerImportError(error, child)
            );
            break;
          case 'mod':
            break;
          case 'error':
            break;
        }
      }
    }
  }

  createBlank(child) {
    return new baseClass(child);
  }
  pathToModuleBlock(cls) {
    let path = String(cls) + '/' + String(cls);
    return path;
  }
  pathToModuleElement(cls) {
    let arrClsSplit = cls.split('__');
    let blockDirr = arrClsSplit[0];
    let elementDirr = '__' + arrClsSplit[1];
    let path = String(blockDirr) + '/' + String(elementDirr) + '/' + String(cls);
    return path;
  }
  handlerImportResult(result, child) {
    console.log(result);
    for(let key in result) {
      this.children.push(new result[key](child));
    }
  }
  handlerImportError(error, child) {
    console.log(error);
    this.children.push(this.createBlank(child));
  }
  checkClassBem(cls) {
    if(!cls.includes('_')) {
      //console.log('it is block');
      return 'block'
    }
    else if(cls.includes(cls.match(/[^_]__[^_]/)) && !cls.includes(cls.match(/[^_]_[^_]/))) {
      //console.log('it is element');
      return 'element'
    }
    else if(cls.includes(cls.match(/[^_]_[^_]/))) {
      //console.log('it is mod');
      return 'mod'
    }
    else {
      //console.log('error');
      return 'error'
    }
  }

  /*
    Должен иметь:
    - ссылку на dom элемент;
    - метод инициализации детей;
    - коллекцию с сылками на js объекты детей;

  */

}