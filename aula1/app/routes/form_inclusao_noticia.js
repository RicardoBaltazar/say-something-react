module.exports = function(app){
    app.get('/form_inclusao_noticia', function(req, res){
        res.render('admin/index')
    })
}