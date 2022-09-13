<?php

namespace NetCoreAPIDocker.Model
{
    public class BaseIngredient : BaseEntity
    {
        /// <summary>
        /// Onion / Tomato / Pineapple
        /// </summary>
        public string Name { get; set; }
        public Quantifier Quantifier { get; set; }

        public List<IngredientTag> IngredientTags { get; set; }
    }
}
