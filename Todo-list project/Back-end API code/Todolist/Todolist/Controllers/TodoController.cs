
using Microsoft.AspNetCore.Mvc;

namespace Todolist.Controllers
{
    [Route("api/")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        [HttpGet]
        [Route("tasks")]
        public List<Todo> GetTaskData()
        {
            Thread.Sleep(2000);
            return TodoDataAccess.GetTasksDataList();
        }
        [HttpPost]
        [Route("savetasks")]
        public IActionResult CreateTask([FromBody] Todo bodyData)
        {
            if (bodyData == null)
            {
                return BadRequest("Task data is null");
            }
            else
            {
                TodoDataAccess.SetTaskDetails(bodyData);
                return Ok("Task created successfully");
            }
        }
        [HttpPut]
        [Route("updatetasks")]
        public IActionResult UpdateTask([FromBody] Todo bodyData)
        {
            if (bodyData == null)
            {
                return BadRequest("Task data is null");
            }
            else
            {
                TodoDataAccess.UpdateTaskDetails(bodyData);
                return Ok("Task updated successfully");
            }
        }
        [HttpDelete]
        [Route("deletetasks")]
        public IActionResult DeleteTask([FromBody] Todo bodyData)
        {
            if (bodyData == null)
            {
                return BadRequest("Task data is null");
            }
            else
            {
                TodoDataAccess.DeleteTask(bodyData);
                return Ok("Task has been deleted successfully");
            }
        }
        [HttpDelete]
        [Route("deletealltasks")]
        public IActionResult DeleteAllTask()
        {
            TodoDataAccess.DeleteAllTask();
            return Ok("Task has been deleted successfully");
        }
    }
}
