using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FilmQASim.Models; 
namespace FilmQASim.Controllers;

public class HomeController : Controller
{
    public JsonResult getGafObj(){
        var obj = new Backend.Backend();
        return Json(obj.gafChrome);
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
