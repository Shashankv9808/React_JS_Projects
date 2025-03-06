using Microsoft.Data.SqlClient;
using System.Data;

namespace Todolist
{
    public class Todo
    {
        public int TaskID { get; set; }
        public required string Name { get; set; }
        public required DateTime Time { get; set; }
        public required bool IsCompleted { get; set; }
    }
    public class TodoDataAccess
    {
        private readonly static string CONNECTION_STRING = "Data Source=Shashank;Initial Catalog=TaskMate;Integrated Security=SSPI;Encrypt=False;TrustServerCertificate=True";
        internal static List<Todo> GetTasksDataList()
        {
            List<Todo> all_tasks_list = new List<Todo>();
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("SELECT ID,Name,Time,IsCompleted FROM dbo.Tasks", connection))
                    {
                        connection.Open();
                        using (SqlDataReader rd = command.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                Todo info = new Todo()
                                {
                                    TaskID = rd.GetInt32("ID"),
                                    Name = rd.GetString("Name"),
                                    Time = rd.GetDateTime("Time"),
                                    IsCompleted = rd.GetBoolean("IsCompleted")
                                };
                                all_tasks_list.Add(info);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
            return all_tasks_list;
        }
        internal static void SetTaskDetails(Todo taskData)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("INSERT INTO dbo.Tasks (Name, Time, IsCompleted) VALUES (@Name, @Time, @IsCompleted) ", connection))
                    {
                        command.Parameters.AddWithValue("Name", taskData.Name);
                        command.Parameters.AddWithValue("Time", DateTime.Now);
                        command.Parameters.AddWithValue("IsCompleted", false);
                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
        }
        internal static void UpdateTaskDetails(Todo taskData)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("UPDATE dbo.Tasks SET Name = @Name, Time =  @Time, IsCompleted = @IsCompleted WHERE ID = @TaskID ", connection))
                    {
                        command.Parameters.AddWithValue("Name", taskData.Name);
                        command.Parameters.AddWithValue("Time", DateTime.Now);
                        command.Parameters.AddWithValue("IsCompleted", taskData.IsCompleted);
                        command.Parameters.AddWithValue("TaskID", taskData.TaskID);
                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
        }
        internal static void DeleteTask(Todo taskData)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("DELETE dbo.Tasks WHERE ID = @TaskID ", connection))
                    {
                        command.Parameters.AddWithValue("TaskID", taskData.TaskID);
                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
        }
        internal static void DeleteAllTask()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("DELETE dbo.Tasks ", connection))
                    {
                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
        }
    }
}

