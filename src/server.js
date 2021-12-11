/**
 * GoBarber API
 * Made with love by https://github.com/mathmelo
 * Api created based on GoStack training by Rocketseat
 * Matheus Melo da Costa - 2021
 */

import 'dotenv/config';
import app from './app';

// Add port to server
app.listen(process.env.PORT || 3335);
