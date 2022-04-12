var span = document.getElementById('getDateTime');

           function dateTime() {   
            var today = new Date();
                                    var dd = String(today.getDate()).padStart(2, '0');
                                    var m = String(today.getMonth()); //January is 0!
                                    var hh = String(today.getHours());
                                    var min = String(today.getMinutes());
                                    var ss = String(today.getSeconds());
                                    var d = String(today.getDay());
                                    let mm;
                                    let day;
                                    switch (m) {
                                        case '0': mm = 'يناير';
                                            break;
                                        case '1': mm = 'فبراير';
                                            break;
                                        case '2': mm = 'مارس'
                                            break;
                                        case '3': mm = 'ابريل';
                                            break;
                                        case '4': mm = 'مايو';
                                            break;
                                        case '5': mm = 'يونيو';
                                            break;
                                        case '6': mm = 'يوليو';
                                            break;
                                        case '7': mm = 'أغسطس';
                                            break;
                                        case '8': mm = 'سبتمبر';
                                            break;
                                        case '9': mm = 'أكتوبر';
                                            break;
                                        case '10': mm = 'نوفمبر';
                                            break;
                                        case '11': mm = 'ديسبمر';
                                            break;
                                    }
                                    switch (d) {
                                        case '0': day = 'الأحد';
                                            break;
                                        case '1': day = 'الاثنين';
                                            break;
                                        case '2': day = 'الثلاثاء';
                                            break;
                                        case '3': day = 'الأربعاء';
                                            break;
                                        case '4': day = 'الخميس';
                                            break;
                                        case '5': day = 'الجمعة';
                                            break;
                                        case '6': day = 'السبت';
                                            break;
                                
                                    }
                                    var yyyy = today.getFullYear();
                                    today = day + ' ، ' + dd + ' - ' + mm + ' - ' + yyyy + ' | ' + hh + ':' + min + ":" + ss;
                                    document.getElementById("getDateTime").innerHTML = today;
                                } 
                                setInterval(dateTime,1000);