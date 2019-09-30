export class Template {
  constructor(e) {
   
 this.ModalInfo

  }
ModalInfo(idP) {
    $(`#${idP}`).click(function () {
      $(`.${idP}`).modal('show');
    });
    $(`.${idP}`).modal({
      closable: true
    });
  };


}




