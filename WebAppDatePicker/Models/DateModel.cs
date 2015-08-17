using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace WebAppDatePicker.Models
{
    public class DateModel
    {
        public DateTime Date { get; set; }

        public CultureInfo Culture { get; set; }

        public bool DisplayLocale { get; set; }

        public DateTime MinDate { get; set; }

        public DateTime MaxDate { get; set; }

        public string DateFormated
        {
            get
            {
                return Date.ToString("dd/MM/yyyy");
            }
        }

        public string MinDateFormated
        {
            get
            {
                return MinDate.ToString("dd/MM/yyyy");
            }
        }

        public string MaxDateFormated
        {
            get
            {
                return MaxDate.ToString("dd/MM/yyyy");
            }
        }
    }
}