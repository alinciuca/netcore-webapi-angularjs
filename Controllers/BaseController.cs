using Microsoft.AspNetCore.Mvc;

namespace webapp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BaseController : Controller
    {

    }
}