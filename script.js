
const data = [
    {
        image:"shoes.jpg",
        titleNew:"$60.00",        
        titleOld:"$̶1̶1̶5̶",
        button:"ADD TO CART",
    },
    {
        image:"clock.webp",
        titleNew:"$95.00",       
        titleOld:"$̶1̶9̶5̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"pants.avif",
        titleNew:"$40.00",        
        titleOld:"$̶9̶5̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"phone1.png",
        titleNew:"$95.00",        
        titleOld:"$̶1̶9̶5̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"shirt.webp",
        titleNew:"$20.00",        
        titleOld:"$̶4̶5̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"iron.jpeg",
        titleNew:"$50.00",        
        titleOld:"$̶9̶8̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"trainers.jpg",
        titleNew:"$25.00",       
        titleOld:"$̶6̶5̶.̶0̶0̶",
        button:"ADD TO CART",
    },
    {
        image:"sunglasses.webp",
        titleNew:"$36.00",       
        titleOld:"$̶8̶4̶.̶0̶0̶",
        button:"ADD TO CART",
    },
];

let container = document.createElement('div')
container.classList.add('container');

const renderBlock =() => {
    let fragment = new DocumentFragment();
    data.map((elem,id) => {
        console.log(id)
        let block = document.createElement("div");
        let title = document.createElement("div");
        block.className = 'block-item'
        title.className = 'block-div'
        block.innerHTML = `
        <img src=${elem.image}>
        <div class="block-div"> 
             <div>${elem.titleNew}</div>
             <div>${elem.titleOld}</div>
        </div>        
        <div class="btn"><button>${elem.button}</button></div>`;        
        title.append("div");
        fragment.append(block);
    });
    return fragment;
};
container.append(renderBlock());

document.body.append(container);