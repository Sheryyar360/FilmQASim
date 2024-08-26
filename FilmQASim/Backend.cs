using System;


namespace Backend{
    public class Backend{
        Random random = new Random();
        public int[,] gafChrome {get;} = new int[10, 10];

// Populating 2D Array
        public Backend()
        {
        populateArray();
        }

// Method to populate 2D Array
    private void populateArray()
    {
        for (int m = 0; m< 10; m++){
            for (int n = 0; n< 10; n++){
                gafChrome[m, n] = random.Next(0, 100);
            }
        }
    }

}
}