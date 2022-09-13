<?php
namespace NetCoreAPIDocker.Model
{
    public class Recipe : BaseEntity
    {
        public string Name { get; set; }
        public List<RecipeIngredient> RecipeIngredients { get; set; }
        public double EstimatedCalories { get;set; }
    }
}
