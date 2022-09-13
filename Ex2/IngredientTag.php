<?php
namespace NetCoreAPIDocker.Model
{
    public class IngredientTag : BaseEntity
    {
        /// <summary>
        /// Halal / Vegetarian / Meat-based / Soy-Product / Diary-Product
        /// </summary>
        public string Name { get; set; }
    }
}
