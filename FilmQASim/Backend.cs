using System;


namespace Backend{
    public class Backend{
        Random random = new Random();
        private int[,] gafChrome = new int[10, 10];

// Populating 2D Array
        public Backend()
        {
        setBacked();
        }

// Method to populate 2D Array
    private void setBacked()
    {
        for (int m = 0; m< 10; m++){
            for (int n = 0; n< 10; n++){
                gafChrome[m, n] = random.Next(0, 100);
            }
        }
    }

    public int[,] GetBackend{
        get {
            return gafChrome;
        }
    }

}
}