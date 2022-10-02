export class baseClass {
  constructor(domElement) {
    this.domElement = domElement;
    this.init(this.domElement);
  }

  
  init(domElement) {
    for (let child of domElement.children) {
      //нужно импортировать js реализацию каждого блока ребёнка
      //если js реализации нет, создать болванку

      for(let c of child.classList) {
        //сделаем допущение, что на одном DOM-элементе может быть только один класс (что не верно, ибо это не так)

        let prom = import('../' + this.pathToModule(c) + '.js');
        prom.then(
          result => this.handlerImportResult(result), 
          error => this.handlerImportError(error, child)
        );


      }
    }
  }

  createBlank(child) {
    return new baseClass(child);
  }
  pathToModule(cls) {
    let path = String(cls) + '/' + String(cls);
    return path;
  }
  handlerImportResult(result) {
    console.log(result);
  }
  handlerImportError(error, child) {
    console.log(error);
    let i = this.createBlank(child);
  }

  /*
    Должен иметь:
    - ссылку на dom элемент;
    - метод инициализации детей;
    - коллекцию с сылками на js объекты детей;

  */

}