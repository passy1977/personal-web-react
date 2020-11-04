

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
            },
            {
                id: 3,
                icon: "fa-bars",
                title: "Page3",
                descr: "Descr3",
            }
        ];
    }

}

export default PageService = new PageService();