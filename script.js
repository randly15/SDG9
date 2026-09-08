function go(pageId){
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    document.querySelectorAll('.navlink').forEach(b => b.classList.toggle('active', b.dataset.page === pageId));
    document.querySelector('nav.links').classList.remove('open');
    window.scrollTo({top:0, behavior:'auto'});
  }
