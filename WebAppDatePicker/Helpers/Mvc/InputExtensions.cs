using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Routing;
using WebAppDatePicker.Models;

namespace System.Web.Mvc.Html
{
    public static class InputExtensions
    {
        //
        // Summary:
        //     Returns a text input element for each property in the object that is represented
        //     by the specified expression.
        //
        // Parameters:
        //   htmlHelper:
        //     The HTML helper instance that this method extends.
        //
        //   expression:
        //     An expression that identifies the object that contains the properties to
        //     render.
        //
        // Type parameters:
        //   TModel:
        //     The type of the model.
        //
        //   TProperty:
        //     The type of the value.
        //
        // Returns:
        //     An HTML input element whose type attribute is set to "text" for each property
        //     in the object that is represented by the expression.
        //
        // Exceptions:
        //   System.ArgumentException:
        //     The expression parameter is null or empty.
        public static MvcHtmlString DatePickerFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, DateModel dateModel)
        {
            ModelMetadata metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);

            DateTime date = (DateTime)metadata.Model;

            var dayMvcString = htmlHelper.TextBox("day", date.Day, new { style = "width:20px;", type = "text", @class = "datepicker day" });
            var monthMvcString = htmlHelper.TextBox("month", date.Month, new { style = "width:20px;", type = "text", @class = "datepicker month" });
            var yearMvcString = htmlHelper.TextBox("year", date.Year, new { style = "width:40px;", type = "text", @class = "datepicker year" });

            string name = metadata.DataTypeName ?? "datename";
            var datepickerMvcString = htmlHelper.TextBox(name, date.Year, new
            {
                style = "display:none;",
                type = "text",
                @class = "date cancel",
                data_lang = dateModel.Culture.Name,
                data_mindate = dateModel.MinDateFormated,
                data_maxdate = dateModel.MaxDateFormated
            });

            string dateFormated = dateModel.Culture.DateTimeFormat.ShortDatePattern;
            string elems = dateFormated;

            elems = Regex.Replace(elems, "[mM]{1,2}", "__M");
            elems = Regex.Replace(elems, "[dD]{1,2}", "__D");
            elems = Regex.Replace(elems, "[yY]{2,4}", "__Y");


            elems = Regex.Replace(elems, "__M", monthMvcString.ToHtmlString());
            elems = Regex.Replace(elems, "__D", dayMvcString.ToHtmlString());
            elems = Regex.Replace(elems, "__Y", yearMvcString.ToHtmlString());

            return MvcHtmlString.Create(string.Format("{0} {1}", elems, datepickerMvcString.ToHtmlString()));
        }
    }
}
