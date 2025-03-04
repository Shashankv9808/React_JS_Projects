using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TaskMateDataAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public List<Product> Get()
        {
            return ProductDataAccess.GetProductDataList();
        }
    }
}
