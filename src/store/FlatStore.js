import { makeAutoObservable } from "mobx";

export default class FlatStore {
  constructor() {
    this._flats = [
      {
        id: 1,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 2,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 3,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 4,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 5,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 6,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 7,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
      {
        id: 8,
        title: "Flat title",
        description: "Flat desc",
        price: 3000,
        photo:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
      },
    ];

    makeAutoObservable(this);
  }

  setFlats(flats) {
    this._flats = flats;
  }

  get flats() {
    return this._flats;
  }
}
