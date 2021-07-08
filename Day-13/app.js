var after = '';
var count = 0;

function fetchMemes() {
  colorChange();

  if(document.getElementById('memes')){
    document.getElementById('memes').remove();
  }

  let parentdiv = document.createElement('div')
  parentdiv.id = 'memes'
  fetch('https://www.reddit.com/r/memes.json?after=${count}')
    .then(response => response.json())
    .then(body => {
      after = body.data.after
      for (let index = 0; index < body.data.children.length; index++) {
        console.log(index)
        if (body.data.children[index].data.post_hint === 'image') {
          let div = document.createElement('div')
          let h4 = document.createElement('h4')
          let image = document.createElement('img')
          image.src = body.data.children[index].data.url_overridden_by_dest
          h4.textContent = body.data.children[index].data.title
          div.appendChild(h4)
          div.appendChild(image)
          parentdiv.appendChild(div)
        }
      }
      document.body.appendChild(parentdiv);
    })
    count +=1 ;
    after = count.toString();
    console.log(count)
    console.log(after)
}