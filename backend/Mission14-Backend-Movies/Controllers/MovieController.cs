using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14_Backend.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission14_Backend_Movies.Controllers
{
    // this is the controller for the Movie API that gets the movie data
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        // GET: /<controller>/
        public IEnumerable<Movies> Get()
        {
            // This gets the movies from the database that have been edited and puts them in slphabetical order
            return context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray();
        }

    }
}

