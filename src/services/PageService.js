

class PageService {

    get pages() {
        return [
            {
                id: 1,
                icon: "fa-bars",
                title: "Page1",
                descr: "Descr1",
            },
            {
                id: 2,
                icon: "fa-bars",
                title: "Page2",
                descr: "Descr2",
                list: [
                    {
                        id: 1,
                        title1: "title1",
                        title2: "title2",
                        subtitle: "subtitle",
                        years: "years",
                        descr: "descr",
                    },
                    {
                        id: 2,
                        title1: "title1",
                        subtitle: "subtitle",
                        years: "years",
                        descr: "descr",
                    },
                    {
                        id: 3,
                        title1: "title1",
                        years: "years",
                        descr: "descr",
                    },
                ]
            },
            {
                id: 3,
                icon: "fa-bars",
                title: "Page3",
                descr: "Descr3",
            }
        ];
    }

    idLogged = ()=> false;
}

const pageService = new PageService();

export default pageService;