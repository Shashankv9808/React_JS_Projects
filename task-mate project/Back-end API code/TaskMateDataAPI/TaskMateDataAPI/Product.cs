
using Microsoft.Data.SqlClient;
using System.Data;

namespace TaskMateDataAPI
{
    public class Product
    {
        public int ProductID { get; set; }
        public required string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public bool InStock { get; set; }
    }
    public class ProductDataAccess
    {
        private readonly static string CONNECTION_STRING = "Data Source=Shashank;Initial Catalog=TaskMate;Integrated Security=SSPI;Encrypt=False;TrustServerCertificate=True";
        internal static List<Product> GetProductDataList()
        {
            List<Product> all_product_list = new List<Product>();
            try
            {
                using (SqlConnection connection = new SqlConnection(CONNECTION_STRING))
                {
                    using (SqlCommand command = new SqlCommand("SELECT ProductID,ProductName,Price,IsStock FROM dbo.Product", connection))
                    {
                        connection.Open();
                        using (SqlDataReader rd = command.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                Product info = new Product()
                                {
                                    ProductID = rd.GetInt32("ProductID"),
                                    ProductName = rd.GetString("ProductName"),
                                    ProductPrice = (int)rd.GetInt32("Price"),
                                    InStock = rd.GetBoolean("IsStock")
                                };
                                all_product_list.Add(info);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string exception = ex.Message;
            }
            return all_product_list;
        }

    }
}
