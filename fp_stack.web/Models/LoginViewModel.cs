using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fp_stack.web.Models
{
    public class LoginViewModel
    {
        public string UserName { get; set; }
        //[Password]
        public string Password { get; set; }
        public bool IsPersistent { get; set; }
    }
}
