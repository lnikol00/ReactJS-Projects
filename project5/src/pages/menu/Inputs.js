export const inputs = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Upišite ime",
        errorMessage: "Ime mora imati izmeđju 3-16 znakova i ne smije uključivati znakove ili brojeve!",
        label: "Ime i prezime",
        pattern: "^[A-Za-z]{3,16}?$",
        required: true,
    },
    {
        id: 2,
        name: "",
        type: "address",
        placeholder: "Upišite adresu na koju želite dostavu",
        errorMessage: "Morate unijeti adresu",
        label: "Adresa",
        required: true,
    },
    {
        id: 3,
        name: "phoneNumber",
        type: "tel",
        placeholder: "+385** / *** / ****",
        errorMessage: "Broj mobitela može zadržavati samo brojeve",
        label: "Broj mobitela",
        pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
        maxlenght: '19',
        required: true,
    }
]