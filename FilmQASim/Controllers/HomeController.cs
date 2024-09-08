using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FilmQASim.Models;
using System.Text.Json;
using System.Runtime.CompilerServices;
namespace FilmQASim.Controllers;

public class HomeController : Controller
{
    public IActionResult GetGafObj(){
        var obj = new Backend.Backend();
        var data = Newtonsoft.Json.JsonConvert.SerializeObject(obj.getBackend);
        return Ok(data);
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
