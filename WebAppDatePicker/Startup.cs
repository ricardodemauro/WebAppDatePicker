using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppDatePicker.Startup))]
namespace WebAppDatePicker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
