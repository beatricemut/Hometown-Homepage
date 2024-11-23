document.getElementById('button').addEventListener('click', (event) => {
    names = ['Coat of Arms', 'Cde Levy Mwanawasa ', 'Mopani Mine', 'Mufulira Wanderers FC'];
    links = ['https://shorturl.at/tSFf8', 'https://en.wikipedia.org/wiki/Levy_Mwanawasa', 'https://mopani.com.zm/', 'https://www.facebook.com/TheOfficialMufuliraWanderersF.c1953/'];
    while (!!names.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let element_list = document.getElementById('links');
      let new_li = document.createElement('li');
      let new_a = document.createElement('a');
      new_a.setAttribute("href", links.shift());
      new_a.innerText = names.shift();
  
      new_li.appendChild(new_a);
  
      element_list.appendChild(new_li);
    }
  
  });