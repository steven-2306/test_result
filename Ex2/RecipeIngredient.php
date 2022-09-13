<?php
namespace NetCoreAPIDocker.Model
{
    public class RecipeIngredient : BaseEntity
    {
        public BaseIngredient Ingredient {get;set;}
        public double? Quantity { get; set; }
    }
}
